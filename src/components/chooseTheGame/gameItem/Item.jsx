import React from "react";
import style from './item.module.scss';

const Item = (prop) => {
	const checked = [];
	const algorithm = (arr) => {
		arr.forEach((item) => {
			if (!checked.includes(item)) {
				click(document.querySelector(`#fieldItem${item}`), false, item);
			}
		})
	}

	const click = (e, afterBtn = true, itemCur) => {
		let target;
		if (afterBtn) {
			e.preventDefault();
			target = e.target;
		} else {
			target = e;
		}
		const item = itemCur;
		const num = Math.sqrt(prop.num);
		const one = item - num;
		const two = item - num + 1;
		const three = item - num - 1;
		const four = item - 1;
		const five = item + 1;
		const six = item + num;
		const seven = item + num + 1;
		const eight = item + num - 1;
		const bombsCount = [];

		if (item === 1) {
			bombsCount.push(five, seven, six);
		} else if (item === num) {
			bombsCount.push(four, six, eight);
		} else if (item === prop.num - num + 1) {
			bombsCount.push(one, two, five);
		} else if (item === prop.num) {
			bombsCount.push(one, three, four);
		} else if (item > 1 && item < num) {
			bombsCount.push(four, five, six, seven, eight);
		} else if (item > prop.num - num + 1 && item < prop.num) {
			bombsCount.push(one, two, three, four, five);
		} else if ((item - 1) % num === 0) {
			bombsCount.push(one, two, five, six, seven);
		} else if (item % num === 0) {
			bombsCount.push(one, three, four, six, eight);
		} else {
			bombsCount.push(one, two, three, four, five, six, seven, eight);
		}

		let btnText = 0;

		for (let i = 0; i < bombsCount.length; i += 1) {
			if (prop.bombs.includes(bombsCount[i]) && bombsCount[i] > 0) {
				btnText += 1;
			}
		}

		if (prop.bombs.includes(item)) {
			target.classList.add(style.aggressive);
			for (let i = 0; i < prop.bombs.length; i += 1) {
				document.querySelector(`#fieldItem${prop.bombs[i]}`).classList.add(style.aggressive);
			}

			for (let i = 1; i <= prop.num; i += 1) {
				document.querySelector(`#fieldItem${i}`).disabled = true;
			}

			prop.change();
		} else {
			target.textContent = `${btnText}`;
			target.classList.add(style.friendly);
		}

		checked.push(item);
		if (btnText === 0 && !prop.bombs.includes(item)) {
			algorithm(bombsCount);
		}
	}

	return (
		<button id={'fieldItem' + prop.item} onClick={(e) => click(e, true, prop.item)} className={ `${style.item} ${prop.num === 36 ? style.nine :
			prop.num === 81 ? style.sixty : style.twentyFive }`} />
	)
}

export default Item;
