import styled from 'styled-components';

export default function ListsTitle({ title }: { title: string | undefined }) {
	return (
		<Con>
			<Title>{title}</Title>
		</Con>
	);
}

const Con = styled.div`
	height: 70px;
`;

const Title = styled.h1`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	font-size: 28px;
	font-weight: bold;
`;
