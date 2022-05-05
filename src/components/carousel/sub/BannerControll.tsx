import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import data from './../../../../data.json';

interface BannerControllProps {
	bannerTranslate: number;
	setBannerTranslate: (bannerTranslate: number) => void;
}

export default function BannerControll({
	bannerTranslate,
	setBannerTranslate,
}: BannerControllProps) {
	const recommendLength = data.recommend.length;

	const rightRef = useRef<HTMLElement>(null);
	const leftRef = useRef<HTMLElement>(null);

	const handleRightArrow = () => {
		setBannerTranslate(bannerTranslate + 33.333333);
	};

	const handleLeftArrow = () => {
		setBannerTranslate(bannerTranslate - 33.333333);
	};

	useEffect(() => {
		if (leftRef.current !== null) {
			if (bannerTranslate === 0 || bannerTranslate < 0) {
				leftRef.current.style.opacity = '0';
				leftRef.current.style.visibility = 'hidden';
			} else {
				leftRef.current.style.opacity = '1';
				leftRef.current.style.visibility = 'visible';
			}
		}

		if (rightRef.current !== null) {
			if (
				Math.floor(bannerTranslate) ===
				Math.floor((33.333333 * recommendLength) / 4 - 33.333333)
			) {
				rightRef.current.style.opacity = '0';
				rightRef.current.style.visibility = 'hidden';
			} else {
				rightRef.current.style.opacity = '1';
				rightRef.current.style.visibility = 'visible';
			}
		}
	}, [bannerTranslate, recommendLength]);

	return (
		<>
			<RightArrow
				ref={rightRef}
				className="fa-solid fa-angle-right"
				onClick={handleRightArrow}
			></RightArrow>
			<LeftArrow
				ref={leftRef}
				className="fa-solid fa-angle-left"
				onClick={handleLeftArrow}
			></LeftArrow>
		</>
	);
}

const RightArrow = styled.i`
	position: absolute;
	right: 0px;
	top: 50%;
	transform: translateY(-50%);
	padding: 12px 18px;
	font-size: 20px;
	background-color: #fff;
	border-radius: 50%;
	box-shadow: 1px 1px 5px lightgray;
	cursor: pointer;
`;
const LeftArrow = styled.i`
	position: absolute;
	left: 0px;
	top: 50%;
	transform: translateY(-50%);
	padding: 12px 18px;
	font-size: 20px;
	background-color: #fff;
	border-radius: 50%;
	box-shadow: 1px 1px 5px lightgray;
	opacity: 0;
	visibility: hidden;
	cursor: pointer;
`;
