import styled from "styled-components";


export const Wrapper = styled.div`

`

export const SavePer = styled.div`
  background-color: #edf3fd;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 10px;
   p{
    padding: 0;
    margin: 0;
   }
  /* margin-top: 20px; */

  .per {
    width: 20px;
    height: 20px;
    background-color: #2c7ef8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 15px;
  }

  span {
    color: #2c7ef8;
  }
`;

export const ClaimDiscountBtn = styled.button`
  white-space: nowrap;
  margin-top: 20px;
  background-color: #59ae43;
  border-radius: 50px;
  color: #fff;
  padding: 16px 64px 16px 64px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;

`;


export const PaymentSystem = styled.div`
border:1px solid #CFCFCF;
border-radius: 4px;
padding: 8px;
`