 import { Inter} from 'next/font/google'
 import { Container, Navbar, Text,Button, Grid, Col } from '@nextui-org/react'
import InfoCard from '@/components/infoCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
       
        <Navbar isCompact variant={"static"}>
          <Navbar.Brand>
           <Text b color="inherit">
            logo
           </Text>
            </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Content hideIn={"md"}>
            <Navbar.Link href='#'>Learning Platform</Navbar.Link>
            <Navbar.Link href='#'>Community</Navbar.Link>
            <Navbar.Link href='#'>Contact US</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
          <Navbar.Link href='#'>Login</Navbar.Link>
         <Button auto flat href='#'>
            Sing Up
          </Button>
         </Navbar.Content>
        </Navbar>

       
       <Grid.Container justify='center' css={{"height": "500px", "backgroundImage": "url(https://imgs.search.brave.com/HaRroqFLSGEEd0S37v1EsQbH2GFFKwzSNX3nagy7u-c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS80My80/Mi9Jd1dCSDMuanBn)"}}>
            <Grid xs={12} sm={6} alignItems='center'>
              <Col css={{"width": "100%"}}>
                 <Text weight={"bold"} size={50} css={{"textAlign": "center"}}>The Education Platform</Text>
                 <Text weight={"bold"} size={50} css={{"textAlign": "center"}}>Off The Future</Text>
            <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}} >Join For Free</Button>
              </Col>
            </Grid>
       </Grid.Container>

       <Grid.Container gap={2}>
        <Grid xs={12} sm={4} alignItems='center'>
          <InfoCard title={'Para estudos'} label={'Course'} imageURL={'https://imgs.search.brave.com/HaRroqFLSGEEd0S37v1EsQbH2GFFKwzSNX3nagy7u-c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS80My80/Mi9Jd1dCSDMuanBn'} studentCount={'3,500'}></InfoCard>
           
        </Grid>
        <Grid xs={12} sm={4} alignItems='center'>
          <InfoCard title={'Wollll'} label={'Course'} imageURL={'https://imgs.search.brave.com/HaRroqFLSGEEd0S37v1EsQbH2GFFKwzSNX3nagy7u-c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS80My80/Mi9Jd1dCSDMuanBn'} studentCount={'3,500'}></InfoCard>
           
        </Grid>
        <Grid xs={12} sm={4} alignItems='center'>
          <InfoCard title={'Que de mai'} label={'Course'} imageURL={'https://imgs.search.brave.com/HaRroqFLSGEEd0S37v1EsQbH2GFFKwzSNX3nagy7u-c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS80My80/Mi9Jd1dCSDMuanBn'} studentCount={'3,500'}></InfoCard>
           
        </Grid>
       </Grid.Container>


    </Container>
              

      

    
  )
}
