import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';


import React from 'react'

const DateAndTimeInput = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{ width: "20rem", height: "25rem" }}
                components={[

                    'StaticDateTimePicker',
                ]}
            >
                {/* <DemoItem label="Desktop variant">
                    <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                </DemoItem>
                <DemoItem label="Mobile variant">
                    <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                </DemoItem>
                <DemoItem label="Responsive variant">
                    <DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                </DemoItem> */}
                <DemoItem>
                    <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')}
                        okText=""
                        cancelText=""
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default DateAndTimeInput

