import { HalfFilledStarIcon, StarIcon } from './StarIcons'

type StarsRating = {
	rating: number
	mode: 'dark' | 'light'
}

const StarsRating = ({ rating, mode = 'light' }: StarsRating) => {
	const emptyColor = mode === 'light' ? '#29292D' : '#fff'
	const filledColor = '#bef748'

	const clampedRating = Math.min(Math.max(rating, 0), 5)
	const fullStars = Math.floor(clampedRating)
	const hasHalf = clampedRating % 1 !== 0
	const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

	return (
		<div className="card__stars">
			{Array.from({ length: fullStars }, (_, i) => (
				<StarIcon key={`full-${i}`} color={filledColor} />
			))}
			{hasHalf && <HalfFilledStarIcon key="half" unfilledColor={emptyColor} />}
			{Array.from({ length: emptyStars }, (_, i) => (
				<StarIcon key={`empty-${i}`} color={emptyColor} />
			))}
		</div>
	)
}
export default StarsRating

// import { HalfFilledStarIcon, StarIcon } from './StarIcons'

// type StarsRating = {
// 	rating: number
// 	mode: 'dark' | 'light'
// }

// const StarsRating = ({ rating, mode = 'light' }: StarsRating) => {
// 	const flooredRating = Math.floor(rating)
// 	const roundedRating = Math.round(rating)

// 	const content = []

// 	if (rating === 0) {
// 		for (let i = 0; i < 5; i++) {
// 			content.push(<StarIcon color={mode === 'light' ? '#29292D' : '#fff'} />)
// 		}
// 	} else if (rating > 5) {
// 		for (let i = 0; i < 5; i++) {
// 			content.push(<StarIcon color="#bef748" />)
// 		}
// 	} else if (rating.toString().length > 1) {
// 		for (let i = 0; i < flooredRating; i++) {
// 			content.push(<StarIcon color="#bef748" />)
// 		}
// 		content.push(<HalfFilledStarIcon unfilledColor={mode === 'light' ? '#29292D' : '#fff'} />)

// 		if (5 - rating >= 1) {
// 			for (let i = 0; i < 5 - roundedRating; i++) {
// 				content.push(<StarIcon color={mode === 'light' ? '#29292D' : '#fff'} />)
// 			}
// 		}
// 	} else {
// 		for (let i = 0; i < rating; i++) {
// 			content.push(<StarIcon color="#bef748" />)
// 		}

// 		if (5 - rating >= 1) {
// 			for (let i = 0; i < 5 - roundedRating; i++) {
// 				content.push(<StarIcon color={mode === 'dark' ? '#29292D' : '#fff'} />)
// 			}
// 		}
// 	}

// 	return <div className="card__stars">{content}</div>
// }
// export default StarsRating
