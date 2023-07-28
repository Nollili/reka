import React from 'react';
import ListItem from './list-item';

const CardList = ({ title, data }) => {
	return (
		<div>
			<h3 className="tc ph4">{title}</h3>
			{data.map((item, i) => {
				return (
					<>
						<p>{item.text}</p>
						<ListItem key={i} prices={item.prices} />
					</>
				);
			})}
		</div>
	);
};

export default CardList;
