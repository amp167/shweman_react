import {useEffect, useState} from "react";

const Page = ({filter}) => {



    return (
        <div className="Page">

            {filter.map(page => {
                    return (
                        <div className={'card'}>
                            <div className={'card-body'}>
                                <h1>{page.date}</h1>
                                <p>ဆောင်ရန် - {page.todo}</p>
                                <p className={'text-primary'}>ရှောင်ရန် - {page.not_todo}</p>
                                <p className={`${page.one_star == '' ? 'd-none' : 'text-success'}`}>one star :{page.one_star}</p>
                                <p className={`${page.two_star == '' ? 'd-none' : 'text-success'}`}>two star :{page.two_star}</p>
                                <p className={`${page.three_star == '' ? 'd-none' : 'text-success'}`}>three star
                                    :{page.three_star}</p>
                                <p className={`${page.four_star == '' ? 'd-none' : 'text-success'}`}>four star :{page.four_star}</p>
                                <p className={`${page.five_star == '' ? 'd-none' : 'text-success'}`}>five star :{page.five_star}</p>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    );
}
export default Page;