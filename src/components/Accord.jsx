import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion, { accordionClasses } from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { createTheme } from '@mui/material/styles';

export default function Accord({title , description,link}) {
 
  return (
    <AccordionGroup
    sx={{
      maxWidth: 400,
      '& .MuiAccordion-root': {
        marginTop: '0.5rem',
        transition: '0.2s ease',
        '& button:not([aria-expanded="true"])': {
          transition: '0.2s ease',
          paddingBottom: '0.625rem',
          color: '#fff', // Set text color directly for dark background
          backgroundColor: 'transparent',
          borderRadius: '4px',
          
          
        },
        '& button:hover': {
          background: '#37415180', // Darker hover effect
        },
      },
      '& .MuiAccordion-root.Mui-expanded': {
        backgroundColor: '#1a1a1a', // Dark background for expanded section
        borderRadius: '4px',
        borderBottom: '1px solid #333', // Dark border for visual separation
      },
      '& [aria-expanded="true"]': {
        boxShadow: `inset 0 -1px 0 rgba(255, 255, 255, 0.1)`, // Light shadow for expanded button
      },
     
     
    }}
  >
      <Accordion>
        <AccordionSummary>{title} </AccordionSummary>
        <AccordionDetails>
         {description}
         <><a href={link} className='text-blue-500 hover:text-blue-700 transition ease-in duration-150' target='_blank'>know more</a></>
        </AccordionDetails>
        <hr className='border-slate-50/10 hover:hidden' />
      </Accordion>
    
    </AccordionGroup>
  );
}
