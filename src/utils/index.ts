import { DateTime } from "luxon";

export const getRandomColor = (company: string) => {
  const initialCharCode = 'A'.charCodeAt(0)
  const companyCharCode = company.toUpperCase().charCodeAt(0)
  const diff = companyCharCode - initialCharCode
  const number = diff / 3 + 1
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
    default:
      return 'bg-logo-10'
  }
}

export function formatDate(date: Date) {
  const difference = DateTime.fromJSDate(date).diffNow().negate();
  const years = Math.floor(difference.as("years"));
  const months = Math.floor(difference.as("months"));
  const weeks = Math.floor(difference.as("weeks"));
  const days = Math.floor(difference.as("days"));
  const hours = Math.floor(difference.as("hours"));
  const minutes = Math.floor(difference.as("minutes"));
  const seconds = Math.floor(difference.as("seconds"));
  const AGO = "ago";
  if (years > 0) {
    return `${years}y ${AGO}`;
  }

  if (months > 0) {
    return `${months}m ${AGO}`;
  }

  if (weeks > 0) {
    return `${weeks}w ${AGO}`
  }

  if (days > 0) {
    return `${days}d ${AGO}`;
  }

  if (hours > 0) {
    return `${hours}h ${AGO}`;
  }

  if (minutes > 0) {
    return `${minutes}m ${AGO}`;
  }

  return `${seconds}s ${AGO}`;
}
