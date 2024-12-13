import { colors } from '@/styles/theme'
import { IconProps } from '@tabler/icons-react-native'
import { ComponentType } from 'react'
import { Text, View } from 'react-native'
import { s } from './styles'

type Props = {
  description: string
  title: string
  icon: ComponentType<IconProps>
}

export function Step({ description, title, icon: Icon }: Props) {
  return (
    <View style={s.container}>
      <Icon size={32} color={colors.red.base} />
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}
