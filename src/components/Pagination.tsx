import './pagination.scss'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

interface PaginationProps {
	totalItems: number
	itemsPerPage: number
	currentPage: number
	onPageChange: (page: number) => void
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage)

	if (totalPages <= 1) return null

	return (
		<div className="pagination">
			{/* Button PREV - widoczny tylko jeśli strona > 1 */}
			{currentPage > 1 && (
				<button onClick={() => onPageChange(currentPage - 1)} className="pagination__prev">
					<MdOutlineArrowBackIos />
				</button>
			)}

			{/* Numery stron */}
			{Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
				<button
					key={num}
					onClick={() => onPageChange(num)}
					className={currentPage === num ? 'pagination__page active' : 'pagination__page'}
				>
					<span>0{num}</span>
				</button>
			))}

			{/* Button NEXT - widoczny tylko jeśli strona < totalPages */}
			{currentPage < totalPages && (
				<button onClick={() => onPageChange(currentPage + 1)} className="pagination__next">
					<MdOutlineArrowForwardIos />
				</button>
			)}
		</div>
	)
}

export default Pagination
