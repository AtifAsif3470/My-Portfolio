import styled, { keyframes } from "styled-components";


// const TYPE_STATUS = {
//     "approved": "Your leave is approved",
//     "rejected": "Your leave is rejected",
//     "pending": "Be patience, you leave is in pending state",
// }

const Learing = () => {
  // const type = "approved"
  // let msg = ""

  // msg = TYPE_STATUS[type] || "Please select type first"

  // if (type.length === 0) {
  //     msg = "Please select type first"
  // } elif(type === "approved") {
  //     msg = "Your leave is approved"
  // } elifif(type === "rejected") {
  //     msg = "Your leave is rejected"
  // }
  // if(type === "pending") {
  //     msg = "Be patience, your leave is in pending state"
  // }

  return (
    <div>
      <Wrapper color={'red'}>Learning</Wrapper>
      <Wrapper color={'green'}>Learning</Wrapper>
      <Wrapper>Learning</Wrapper>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
      <div style={{ textAlign: "end" }}>
        <button>click me</button>
      </div>
    </div>
  )
}
export default Learing;

const Wrapper = styled.span`
color: ${(props) => props.color ? props.color : 'black'};
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;