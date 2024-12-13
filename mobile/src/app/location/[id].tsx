import { Button } from '@/components/button'
import { Loading } from '@/components/loading'
import { Info } from '@/components/location/info'
import { api } from '@/services/api'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default function Location() {
  const params = useLocalSearchParams<{ id: string }>()
  const [data, setData] = useState<Place>({} as Place)
  const [isLoading, setIsLoading] = useState(true)

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

  useEffect(() => {
    fetchMarket()
  }, [params.id])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1 }}>
      <Button
        style={{
          width: 40,
          height: 40,
          position: 'absolute',
          top: 56,
          left: 24,
          zIndex: 1
        }}
        onPress={() => router.back()}
      >
        <Button.Icon icon={IconArrowLeft} />
      </Button>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Marker
          identifier={data.id}
          coordinate={{ latitude: data.latitude, longitude: data.longitude }}
          image={require('@/assets/pin.png')}
        />
      </MapView>
      <Info data={data} />
    </View>
  )
}
