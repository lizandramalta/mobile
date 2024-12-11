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

type Props = {
  data: Place
}

export function Details({ data }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{data.name}</Text>
      <Text style={s.description}>{data.description}</Text>
      <View style={s.group}>
        <Text style={s.title}>Informações</Text>
        <Info
          description={`${data.coupons} cupons dispoíveis`}
          icon={IconTicket}
        />
        <Info description={data.address} icon={IconMapPin} />
        <Info description={data.phone} icon={IconPhone} />
      </View>
      <View style={s.group}>
        <Text style={s.title}>Regulamento</Text>
        {data.rules.map((item) => (
          <Text
            key={item.id}
            style={s.rule}
          >{`\u2022 ${item.description}`}</Text>
        ))}
      </View>
    </View>
  )
}
