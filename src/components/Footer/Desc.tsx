import styled from 'styled-components';

export default function Desc() {
	return (
		<Con>
			<P>
				마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
				판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
				<br />
				마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의
				당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와
				책임을 부담하지 않습니다.
			</P>
			<P2>ⓒ KURLY CORP.ALL RIGHTS RESERVED</P2>
		</Con>
	);
}

const Con = styled.div`
	height: 100px;
	padding: 20px 0 30px 0;
	text-align: center;
	background-color: #e2e2e2;
`;

const P = styled.p`
	color: gray;
	font-size: 11px;
	line-height: 20px;
`;

const P2 = styled.p`
	color: gray;
	font-size: 12px;
	margin-top: 8px;
`;
