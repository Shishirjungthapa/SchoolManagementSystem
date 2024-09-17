'use client';

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import faqs from '../data/question';

export default function AccordionTechnical() {
    const [expanded, setExpanded] = useState(0);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const commonFaqs = faqs.filter(faq => faq.questionType === 'Technical');

    return (
      <div className='relative flex flex-col w-full h-full gap-5 py-8 pb-5 mt-0 md:py-20 md:px-0 overflow-x-clip'>
        <h1 className='text-lg font-semibold text-textMain'>Technical Questions</h1>
        <div className='flex flex-col justify-center gap-3 px-0'>
          {commonFaqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                border: '1px solid #D8479F',
                boxShadow: '0 0px 0px',
                borderRadius: '10px',
                mb: 0,
                backgroundColor: '#D6D6D65E',
                minHeight: '4rem',
                height: 'auto',
                '&.Mui-expanded': {
                  height: 'auto',
                  backgroundColor: '#09FBD363',
                  opacity: '95%'
                },
              }}
            >
              <AccordionSummary
                expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ color: '#67748E' }}
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails sx={{ color: '#67748E' }}>
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    );
}
