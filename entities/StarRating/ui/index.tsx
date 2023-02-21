import { Tooltip } from '@nextui-org/react'
import React, { useState, createContext, FC } from 'react'
import StarsList from './StarsList'

export const StarRatingContext = createContext<Partial<StarRatingProps>>({})

export interface StarRatingProps {
    rating?: number
    defaultState?: number
    emptyColor?: string
    fillColor?: string
    height?: number
    hover?: null | number
    labelText?: (value: number) => string
    maxValue?: number
    setRating?: (value: number) => void
    setHover?: (value: number) => void
    readOnly?: boolean
    width?: number
}

const StarRating: FC<StarRatingProps> = ({
    defaultState = 3.1,
    emptyColor = 'grey',
    fillColor = '#edaa10',
    height = 20,
    labelText = (value: number) => `Рейтинг товара: ${value}`,
    maxValue = 5,
    readOnly = false,
    width = 20,
}) => {
    const [rating, setRating] = useState(defaultState)
    const [hover, setHover] = useState<number | null>(null)

    const setRatingFn = (value: number) => {
        if (readOnly) return

        setRating(value)
    }

    const setHoverFn = (value: number) => {
        if (readOnly) return

        setHover(value)
    }

    return (
        <>
            <StarRatingContext.Provider
                value={{
                    emptyColor,
                    fillColor,
                    height,
                    hover,
                    labelText,
                    rating,
                    setHover: setHoverFn,
                    setRating: setRatingFn,
                    width,
                    maxValue,
                }}
            >
                <>
                    <Tooltip content={labelText(rating)}>
                        <StarsList />
                    </Tooltip>
                </>
            </StarRatingContext.Provider>
        </>
    )
}

export default StarRating
