import { colors, fontFamily } from '@/styles/theme'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    gap: 4
  },
  image: {
    width: 116,
    height: 104,
    backgroundColor: colors.gray[200],
    borderRadius: 8
  },
  name: {
    color: colors.gray[600],
    fontSize: 14,
    fontFamily: fontFamily.medium
  },
  description: {
    color: colors.gray[500],
    fontSize: 12,
    fontFamily: fontFamily.regular
  },
  footer: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 10
  },
  tickets: {
    color: colors.gray[400],
    fontSize: 12,
    fontFamily: fontFamily.regular
  }
})
