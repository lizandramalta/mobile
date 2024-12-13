import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  content: {
    flexDirection: 'row',
    backgroundColor: colors.green.soft,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    gap: 10
  },
  contentAvailableCoupons: {
    backgroundColor: colors.red.light
  },
  text: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.semiBold
  }
})
