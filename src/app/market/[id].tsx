import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { Coupon } from '@/components/market/coupon'
import { Cover } from '@/components/market/cover'
import { Details } from '@/components/market/details'
import { api } from '@/services/api'
import { colors } from '@/styles/colors'
import { IconMapPin, IconScan, IconTicket } from '@tabler/icons-react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import { Alert, Modal, ScrollView, StatusBar, View } from 'react-native'

export default function Market() {
  const [data, setData] = useState<Place>({} as Place)
  const [isLoading, setIsLoading] = useState(true)
  const [coupon, setCoupon] = useState<string | null>(null)
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)
  const [couponIsFetching, setCouponIsFetching] = useState(false)

  const qrLock = useRef(false)

  const [_, requestPermission] = useCameraPermissions()
  const params = useLocalSearchParams<{ id: string }>()

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível carregar os dados.', [
        { text: 'OK', onPress: () => router.back() }
      ])
    }
  }

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        Alert.alert('Camêra', 'Você precisa habilitar o uso da câmera.')
      }

      qrLock.current = false
      setIsVisibleCameraModal(true)
    } catch (error) {
      console.log(error)
      Alert.alert('Camêra', 'Não foi possível utilizar a camêra.')
    }
  }

  async function getCoupon(id: string) {
    try {
      setCouponIsFetching(true)
      const { data } = await api.patch('/coupons/' + id)

      Alert.alert('Cupom', data.coupon)
      setCoupon(data.coupon)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível utilizar o cupom.')
    } finally {
      setCouponIsFetching(false)
    }
  }

  function handleUseCoupon(id: string) {
    setIsVisibleCameraModal(false)

    Alert.alert(
      'Cupom',
      'Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?',
      [
        {
          style: 'cancel',
          text: 'Não'
        },
        {
          text: 'Sim',
          onPress: () => getCoupon(id)
        }
      ]
    )
  }

  useEffect(() => {
    fetchMarket()
  }, [params.id, coupon])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" hidden={isVisibleCameraModal} />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Cover uri={data?.cover} />
        <Details data={data} />
        {coupon && (
          <Coupon type="couponCode" style={{ paddingHorizontal: 32 }}>
            <Coupon.Icon icon={IconTicket} color={colors.green.base} />
            <Coupon.Text style={{ textTransform: 'uppercase' }}>
              {coupon}
            </Coupon.Text>
          </Coupon>
        )}
      </ScrollView>

      <View style={{ padding: 32 }}>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Button style={{ width: 58 }}>
            <Button.Icon icon={IconMapPin} />
          </Button>
          <Button onPress={handleOpenCamera} style={{ flex: 1 }}>
            <Button.Icon icon={IconScan} />
            <Button.Title>Ler QR Code</Button.Title>
          </Button>
        </View>
      </View>
      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              ;(qrLock.current = true),
                setTimeout(() => handleUseCoupon(data), 500)
            }
          }}
        />
        <View style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
          <Button
            onPress={() => setIsVisibleCameraModal(false)}
            isLoading={couponIsFetching}
            disabled={couponIsFetching}
          >
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  )
}
