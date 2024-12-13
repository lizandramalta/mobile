import { Text, View } from 'react-native'
import { s } from './styles'
import { categoriesIcons } from '@/utils/categories-icons'
import { colors } from '@/styles/theme'
import { Coupon } from '@/components/market/coupon'
import { IconMapPin, IconPhone, IconTicket } from '@tabler/icons-react-native'
import { Info as MarketInfo } from '@/components/market/info'

type Props = {
  data: Place
}

export function Info({ data }: Props) {
  const Icon = categoriesIcons[data.categoryId]
  return (
    <View style={s.container}>
      <View style={s.content}>
        <View style={s.heading}>
          <View style={s.headingInfo}>
            <Text style={s.name}>{data.name}</Text>
            <Icon size={24} color={colors.green.light} />
          </View>
          <Coupon type="availableCoupons">
            <Coupon.Icon icon={IconTicket} color={colors.red.base} />
            <Coupon.Text>{data.coupons}</Coupon.Text>
          </Coupon>
        </View>
        <View>
          <MarketInfo description={data.address} icon={IconMapPin} />
          <MarketInfo description={data.phone} icon={IconPhone} />
        </View>
      </View>
    </View>
  )
}
