import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {

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
      <div className="row">
        <div className="col-md-6">
          <img src={findImage.image} width="50%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findZzanggu.title}</h4>
          <p>{findZzanggu.content}</p>
          <p>{findZzanggu.price}</p>
          <button className="btn btn-danger">마음속에 저-장💖</button>
          <button className="btn btn-danger" onClick={() => { history.push('/') }}>백 투더 태초마을</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;