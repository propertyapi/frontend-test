import { Card, CardContent, CardMedia, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { FC } from 'react'
import defaultCardImage from '../../assets/images/card-media.svg'
import { Checkbox } from '../Checkbox/Checkbox.stories'
import classNames from 'classnames'

const useStyles = makeStyles({
    customcardmain:{
        '& > div':{
            borderRadius: '10px',
            boxShadow: 'none',
        }
    },
    customcard: {
        maxWidth: '229px',
        width: '100%',
        border: ' 2px solid #EFEFEF',
        borderRadius: '10px',
        background: '#fff',
        boxSizing: 'border-box',
        '&:hover': {
            border: '2px solid #65e9d9',
            boxSizing: 'border-box',
        }

    },
    hovered: {
        border: '2px solid #65e9d9',
    },
    selected: {
        border: '2px solid #65e9d9',
    },
    customcardcontent: {
        paddingBottom: '6px !important',
    }

})
export interface CustomCardProps {
    isChecked: boolean,
    handleCardSelect: (e: any) => void,
    imageUrl?: string,
    variant: 'unselected' | 'selected' | 'hovered',
    title: string
}

export const CustomCard: FC<CustomCardProps> = (props) => {
    const { isChecked, handleCardSelect, imageUrl, variant, title } = props
    const classes = useStyles()
    return (
        <Box className={classes.customcardmain}>
            <Card className={classNames(classes.customcard, {
                [classes.selected]: variant === "selected" || isChecked,
                [classes.hovered]: variant === "hovered",
            })}>
                <CardMedia
                    component="img"
                    height="100"
                    image={imageUrl ? imageUrl : defaultCardImage}
                    alt="card media"
                />
                <CardContent sx={{ padding: '14px 0 0 4px', }} className={classes.customcardcontent}>
                    {/* NOTE: Added varint option for checkbox checked to show the variant in storybook only */}
                    <Checkbox label={title} onChange={(e: React.ChangeEvent<HTMLElement>) => handleCardSelect(e)} isChecked={isChecked || variant === "selected"} />
                </CardContent>
            </Card>
        </Box>
    )
}

export default CustomCard