

export const formatDate = (date: Date) => '3h'

export const getRandomColor = () => {
  const number = Math.floor(Math.random() * 12 + 1)
  switch (number) {
    case 1:
      return 'bg-logo-1'
    case 2:
      return 'bg-logo-2'
    case 3:
      return 'bg-logo-3'
    case 4:
      return 'bg-logo-4'
    case 5:
      return 'bg-logo-5'
    case 6:
      return 'bg-logo-6'
    case 7:
      return 'bg-logo-7'
    case 8:
      return 'bg-logo-8'
    case 9:
      return 'bg-logo-9'
    case 10:
      return 'bg-logo-10'
    case 11:
      return 'bg-logo-11'
    case 12:
      return 'bg-logo-12'
    default:
      return 'bg-black'
  }
}