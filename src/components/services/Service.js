import React from "react";
import { Link } from "react-router-dom";
import Button from "../layout/Button";
const Service = ({title=false, text=false, table=false, button=false, bullets=false, id}) => {
  let keys = 0;
  return (
    <div className="service" id={id}>
        <hr />
        { title ? (<h1 className="service-title">{title}</h1>) : (<></>) }
        <hr />
        <div className="service-content">
            <div className="box">
                <div className="service-text-block">

                {
                    text ? 
                      text.map(str => (<><p className="service-text">{str}</p><br /></>)) : (<></>)
                }
                {
                    bullets ? (
                    <div className="service-bullet-box">
                            { 
                                bullets.map(bullet => {
                                    
                                    return (
                                        <>
                                        {
                                            bullet.above ? bullet.above.map(text => (
                                                <b><p className="service-bullet-box-above-text">{text}</p></b>
                                            )) : (<></>)
                                        }
                                        <ul className="service-bullet-list">
                                            {
                                                bullet.text ? bullet.text.map(text => (
                                                <li className={bullet.bold ? "list-item bold" : "list-item"}>
                                                    {text}
                                                </li>)) : (<></>)
                                            }
                                        </ul>
                                        </>
                                    )
                                    })
                            }                
                      </div>
                    ) : (<></>)
                }
                </div>
            </div>
          { table ? (
            <table>
                <thead>
                    <tr>
                        {
                            table.heads.map(head => (<th>{head}</th>))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        table.content.map(section => (
                            <tr>
                            {
                                section.map(str => (
                                    <td>{str}</td>
                                    ))
                                }
                        </tr>
                        ))
                    }      
                </tbody>
            <i>{table.extra}</i>
            </table>) : (<></>)
          }
        </div>
        { 
          button ? (<Link to={button.link}>
            <Button label={button.label} key={++keys}/>
        </Link>) : (<></>)
        }

    </div>
  )
}

export default Service;