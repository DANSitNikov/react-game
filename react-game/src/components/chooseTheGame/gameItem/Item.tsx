import React from 'react';
import style from './item.module.scss';

const Item: React.FC<{item: number}> = (props) => {
	const { item } = props;
	return (
		<button type="submit" className={style.beforeClick} id={`fieldItem-${item}`} />
	);
};

export default Item;
