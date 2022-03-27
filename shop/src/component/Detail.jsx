import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

let Box = styled.div`
padding : 10px;
`
let DetailOfTitle = styled.h4`
font-size: 40px;
color: rgb(198, 129, 129);
font-weight: bold;
`

let MyAlert = styled.div`
padding : 0px;
`

let TitleOfMyAlert = styled.p`
font-size: 30px;
color: rgb(93, 176, 198);
font-weight: bold;
background-color: rgb(242, 210, 116);
`

function Detail(props) {

  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => { setAlert(false); }, 2000);
    return () => { clearTimeout(timer); console.log("타이머와 함께 사라져라 얍!") }
  }, [alert]);


  let history = useHistory();
  let { id } = useParams();
  let findZzanggu = props.zzanggu.find((zzanggu) => {
    return zzanggu.id == id;
  })
  let findImage = props.images.find((img) => {
    return img.id == id
  })

  return (
    <div className="container">
      <Box>
        <DetailOfTitle>Detail</DetailOfTitle>
      </Box>

      {inputData}
      <input onChange={(e) => { setInputData(e.target.value) }} />

      {alert ?
        <MyAlert>
          <TitleOfMyAlert>서둘러 픽하세요! {console.log("암 얼라이브!")}</TitleOfMyAlert>
        </MyAlert> : null}

      <div className="row">
        <div className="col-md-6">
          <img src={findImage.image} width="50%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findZzanggu.title}</h4>
          <p>{findZzanggu.content}</p>
          <p>{findZzanggu.price}</p>
          <button className="btn btn-danger">마음속에 저-장💖</button>
          <button className="btn btn-danger" onClick={() => { history.push('/detail/2') }}>백 투더 태초마을</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;