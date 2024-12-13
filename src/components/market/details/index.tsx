import { Button } from '@/components/button'
import {
  IconArrowLeft,
  IconMapPin,
  IconPhone,
  IconTicket
} from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { ImageBackground, Text, View } from 'react-native'
import { s } from './styles'
import { Info } from '../info'
import { Coupon } from '../coupon'
import { colors, fontFamily } from '@/styles/theme'
import { categoriesIcons } from '@/utils/categories-icons'

type Props = {
  data: Place
}

export function Details({ data }: Props) {
  const IconHeader = categoriesIcons[data.categoryId]
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.name}>{data.name}</Text>
        <IconHeader size={24} color={colors.green.light} />
      </View>
      <Text style={s.description}>{data.description}</Text>
      <Coupon type="availableCoupons" style={s.availableCoupons}>
        <Coupon.Icon icon={IconTicket} color={colors.red.base} />
        <Coupon.Text>
          {data.coupons}{' '}
          <Text style={{ fontFamily: fontFamily.regular }}>
            cupons disponíveis
          </Text>
        </Coupon.Text>
      </Coupon>
      <View style={s.group}>
        <Text style={s.title}>Regulamento</Text>
        {data.rules.map((item) => (
          <Text
            key={item.id}
            style={s.rule}
          >{`\u2022 ${item.description}`}</Text>
        ))}
      </View>
      <View style={s.group}>
        <Text style={s.title}>Informações</Text>
        <Info description={data.address} icon={IconMapPin} />
        <Info description={data.phone} icon={IconPhone} />
      </View>
    </View>
  )
}
