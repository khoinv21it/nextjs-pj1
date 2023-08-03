import React from 'react'
import Script from 'next/script'

const LastScript = () => {
    return ( 
        <>
            <Script src=""></Script>

            <script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-557a95e76b3e51d9" async="async"></script>
            <Script id="my-script" type="text/javascript">
                {/* Call this function once the rest of the document is loaded */}
                function loadAddThis() {
                    addthis.init()
                }
            </Script>
            <Script src="js/bootstrap.min.js"></Script>
            <Script src="js/bs-navbar.js"></Script>
            <Script src="js/vendors/isotope/isotope.pkgd.js"></Script>
            <Script src="js/vendors/slick/slick.min.js"></Script>
            <Script src="js/vendors/tweets/tweecool.min.js"></Script>
            <Script src="js/vendors/rs-plugin/js/jquery.themepunch.revolution.min.js"></Script>
            <Script src="js/vendors/rs-plugin/js/jquery.themepunch.tools.min.js"></Script>
            <Script src="js/jquery.sticky.js"></Script>
            <Script src="js/jquery.subscribe-better.js"></Script>
            <Script src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></Script>
            <Script src="js/vendors/select/jquery.selectBoxIt.min.js"></Script>
            <Script src="js/main.js"></Script></>
    )
}

export default LastScript