import React from "react";
import { Link } from "react-router-dom";
import Button from "../layout/Button";
const Service = ({title, text, table, button}) => {
  return (
    <div className="service">
        <hr />
        <h1 className="service-title">{title}</h1>
        <hr />
        <div className="service-content">
            <div className="box">
                <div className="service-text-block">

                {
                    text.map(str => (<><p className="service-text">{str}</p><br /></>))
                }
                </div>
            </div>
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
            </table>
        </div>
        <Link to={button.link}>
            <Button label={button.label}/>
        </Link>
    </div>
  )
}

export default Service;