import React from "react";
import SubTitle from "/src/components/HTag/SubTitle";

function League(props) {
    const { breadcrumb, tournament, stats, title } = props;

    return (
        <>
            <div className="left w100 pb10 f14">
                {breadcrumb}
            </div>
            <div className="left w100 mt20">
                {tournament}
                <div className="left w100 mt50">
                    <SubTitle title={title} />
                </div>
                <div className="left w100 mt10">
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9482818665347681" crossOrigin="anonymous"></script>
                    <ins className="adsbygoogle"
                        style={{display:'block'}}
                        data-ad-client="ca-pub-9482818665347681"
                        data-ad-slot="8739796769"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
                <div className="left w100 mt10">
                    {stats}
                </div>
            </div>
        </>
    );
}

export default League;