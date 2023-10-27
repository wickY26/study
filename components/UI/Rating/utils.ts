export const createRatingArray = (rating:number, max: number = 5) => {
  if (rating > max ) return
  let stars: Array<number> = []
  for (let i = 0; i < Math.floor(rating); ++i) {
    if (stars.length >= max) return stars
    stars.push(1)
  }
  (rating % 1 != 0) && stars.push(0.5)
  for (let i = 0; i < (max - Math.ceil(rating)); ++i) {
    if (stars.length >= max) return stars
    stars.push(0)
  }
  return (
    stars
  )
}
