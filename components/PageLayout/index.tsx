import {ReactElement, useContext, useEffect} from "react";
import SessionContext from "../../util/SessionContext";

import {useRouter} from "next/router";
import fb from "../../util/firebase-config";
import Head from "next/head";
import {Button} from "@material-ui/core";
import { useTheme, createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import Theme from "../../styles/MuiTheme";

interface Props {
    children: ReactElement;
    privateRoute?: boolean;
    redirectPath?: string;
    content?: any
    title: string;
}

const RedirectHome = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/')
    }, [])

    return <></>
}

const PageLayout: React.FC<Props> = ({children, privateRoute, title, redirectPath}) => {

    const router = useRouter()
    const {isAuthenticated, userProfile} = useContext(SessionContext)

    if (privateRoute && !isAuthenticated) return <RedirectHome/>

    function signOut() {
        fb.auth().signOut()
            .then(() => router.push('/'))
    }


    return <div>
        <Head>
            <title>
                {title}
            </title>
        </Head>
        <div className="fixed w-full">
            <div className="h-1 bg-black"/>
            <div className="flex justify-between py-2.5 px-4 shadow-md items-center bg-white">
                <a href="/"
                   className="flex justify-between items-center font-medium text-lg focus:underline truncate">
                    Hollar Business
                </a>
                <ThemeProvider theme={Theme}>
                <div className="items-center">
                    {isAuthenticated
                    ?
                        <Button color="primary" onClick={signOut}>Sign out</Button>
                    : <span className="space-x-2">
                        <Button onClick={() => router.push('/auth/signin')} color="primary" variant="outlined" disableElevation>Log in</Button>
                        <Button onClick={() => router.push('/auth/signup')} color="primary" variant="contained" disableElevation>Sign up</Button>
                    </span>}
                </div>
                </ThemeProvider>
            </div>
        </div>

        {children}
    </div>


}

export default PageLayout