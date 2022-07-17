import React from 'react'

export default function HistorySingle({history}) {
	console.log(history)
	return (
		<div className='row bg-dark text-white fs-1 my-2 mx-2' >
			{history && history.calculatedHistory}
		</div>
	)
}