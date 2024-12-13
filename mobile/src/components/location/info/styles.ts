import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    paddingHorizontal: 16,
    width: '100%'
  },
  content: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 24,
    gap: 16,
    borderRadius: 16,
    backgroundColor: colors.gray[100]
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headingInfo: {
    flexDirection: 'row',
    flex: 1
  },
  name: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
    marginRight: 8
  },
  coupon: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[600]
  }
})
