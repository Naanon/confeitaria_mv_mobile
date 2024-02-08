import { Text, Pressable, PressableProps } from 'react-native'
import { clsx } from 'clsx'

type CategoryButtonProps = PressableProps & {
  title: string
  isSelected?: boolean
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryButtonProps) {
  return (
    <Pressable
      className={clsx(
        "bg-brown-750 px-4 justify-center rounded-md h-10", isSelected && "bg-yellow-550"
      )}
      {...rest}
    >
      <Text className={clsx(
        "text-slate-100 font-subtitle text-sm", isSelected && "underline"
      )}>{title}</Text>
    </Pressable>
  )
}