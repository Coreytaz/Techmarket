'use client'
import { Container } from '@nextui-org/react'
import dynamic from 'next/dynamic'

const IndexPage = dynamic(() => import('@/_pages/IndexPage'))

export default function Home() {
    return (
        <Container>
            <IndexPage />
        </Container>
    )
}
