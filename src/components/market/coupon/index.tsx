import { IconProps as TablerIconProps } from '@tabler/icons-react-native'
import { ComponentType } from 'react'
import {
  TextProps,
  Text as TextReactNative,
  View,
  ViewProps
} from 'react-native'
import { s } from './styles'

type Props = ViewProps & {
  type: 'availableCoupons' | 'couponCode'
}

function Text({ children, style }: TextProps) {
  return <TextReactNative style={[s.text, style]}>{children}</TextReactNative>
}

type IconProps = {
  icon: ComponentType<TablerIconProps>
  color: string
}

function Icon({ icon: Icon, color }: IconProps) {
  return <Icon size={24} color={color} />
}

function Coupon({ children, type, style }: Props) {
  return (
    <View style={style}>
      <View
        style={[
          s.content,
          type === 'availableCoupons' && s.contentAvailableCoupons
        ]}
      >
        {children}
      </View>
    </View>
  )
}

Coupon.Icon = Icon
Coupon.Text = Text

export { Coupon }
