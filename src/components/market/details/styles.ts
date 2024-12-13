import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    padding: 32,
    paddingBottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.gray[100]
  },
  header: {
    flexDirection: 'row',
    gap: 8
  },
  name: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.gray[600]
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginVertical: 12,
    lineHeight: 22
  },
  availableCoupons: {
    marginBottom: 32
  },
  group: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    marginBottom: 16,
    paddingBottom: 16
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
    marginBottom: 12
  },
  rule: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    lineHeight: 19.6
  }
})
