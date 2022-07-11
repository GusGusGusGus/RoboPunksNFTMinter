import React from 'react'
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import LinkedIn from "./assets/social-media-icons/linkedin_pixelcircle_53x53.png";
import Github from "./assets/social-media-icons/github_pixelcircle_53x53.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts)
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            { /*Left side - Social Media Icons*/}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://www.linkedin.com/in/gustavo-reis-6700a5164/">
                    <Image src={LinkedIn} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://www.github.com/GusGusGusGus">
                    <Image src={Github} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="mailto:gustavosilvareis.lv@gmail.com">
                    <Image src={Email} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>

            <Flex
                justify="space-around"
                align="center"
                width="40%"
                padding="30px 30px 30px 30px"
            >
                <Box margin="0 15px">About</Box>
                <Spacer />
                <Box margin="0 15px">Mint</Box>
                <Spacer />
                <Box margin="0 15px">Team</Box>
                <Spacer />
            </Flex>

            { /*Connect*/}
            {isConnected ? (
                <Box margin="0 15px">Connected</Box>
            ) : (
                <Button 
                backgroundColor="#D6517D"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Connect</Button>
            )}

        </Flex>
    );
};

export default NavBar;
