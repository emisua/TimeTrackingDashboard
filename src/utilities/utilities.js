export const lastTime = (time) => {
  if (time === 'daily') {
    return 'Day'
  }
  if (time === 'monthly') {
    return 'Month'
  }
  return 'Week'
}