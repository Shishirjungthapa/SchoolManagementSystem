import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function CustomizedTimeline() {
  return (
    <Timeline sx={{width:'full', marginLeft:'-70%'}}>
      {/* Timeline Item 1 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: 'white', width:'70px', height:'70px', borderRadius:'2px', display:'flex', alignItems:"center", justifyContent:'center' }}>
            <FavoriteIcon sx={{color:'#F44336', width:'35px', height:'35px'}}/>
          </TimelineDot>
          <TimelineConnector sx={{ height: '70px' }}/> {/* Add connector between items */}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '25px', px: 2, gap:'5px', display:'flex', flexDirection:'column', fontWeight: 'bold' }}>
          <Typography variant="h6" component="span" sx={{fontSize:'17px'}}>
            Instant Data Reflection
          </Typography>
          <Typography sx={{fontSize:'14px'}}>The platform ensures that any changes made—whether to attendance, grades, or fee payments—are instantly updated in the system. This real-time functionality allows for immediate access to the latest information.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Timeline Item 2 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: 'white', width:'70px', height:'70px', borderRadius:'2px', display:'flex', alignItems:"center", justifyContent:'center' }}>
            <FavoriteIcon sx={{color:'#00D285', width:'35px', height:'35px'}}/>
          </TimelineDot>
          <TimelineConnector sx={{ height: '70px' }}/> {/* Add connector between items */}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '25px', px: 2, gap:'5px', display:'flex', flexDirection:'column', fontWeight: 'bold' }}>
        <Typography variant="h6" component="span" sx={{fontSize:'17px'}}>
        Code
          </Typography>
          <Typography sx={{fontSize:'14px'}}>Teachers, students, and parents can view the most current data at any time, enhancing communication and collaboration within the school community. This ensures that everyone stays informed about academic progress and administrative matters.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Timeline Item 3 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: 'white', width:'70px', height:'70px', borderRadius:'2px', display:'flex', alignItems:"center", justifyContent:'center' }}>
            <FavoriteIcon sx={{color:'#FF9100', width:'35px', height:'35px'}}/>
          </TimelineDot>
          <TimelineConnector sx={{ height: '70px' }}/> {/* Add connector between items */}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '25px', px: 2, gap:'5px', display:'flex', flexDirection:'column', fontWeight: 'bold' }}>
        <Typography variant="h6" component="span" sx={{fontSize:'17px'}}>
            Sleep
          </Typography>
          <Typography sx={{fontSize:'14px'}}>Real-time updates foster transparency in school operations, allowing parents to track their child’s performance and attendance without delays. This openness helps build trust between the school and families.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Timeline Item 4 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: 'white', width:'70px', height:'70px', borderRadius:'2px', display:'flex', alignItems:"center", justifyContent:'center' }}>
            <FavoriteIcon sx={{color:'#F44336', width:'35px', height:'35px'}}/>
          </TimelineDot>
          <TimelineConnector sx={{ height: '70px' }}/> {/* Add connector between items */}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '25px', px: 2, gap:'5px', display:'flex', flexDirection:'column', fontWeight: 'bold' }}>
        <Typography variant="h6" component="span" sx={{fontSize:'17px'}}>
            Repeat
          </Typography>
          <Typography sx={{fontSize:'14px'}}>With access to up-to-date information, administrators and teachers can make informed decisions quickly. Whether addressing academic issues or financial matters, having the latest data at hand supports better outcomes for students.</Typography>
        </TimelineContent>
      </TimelineItem>

            {/* Timeline Item 5 */}
            <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: 'white', width:'70px', height:'70px', borderRadius:'2px', display:'flex', alignItems:"center", justifyContent:'center' }}>
            <FavoriteIcon sx={{color:'#00D285', width:'35px', height:'35px'}}/>
          </TimelineDot>
          <TimelineConnector sx={{ height: '70px' }}/> {/* Add connector between items */}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '25px', px: 2, gap:'5px', display:'flex', flexDirection:'column', fontWeight: 'bold' }}>
        <Typography variant="h6" component="span" sx={{fontSize:'17px'}}>
            Good
          </Typography>
          <Typography sx={{fontSize:'14px'}}>Real-time tracking encourages accountability among students and staff. When everyone can see updated records, it motivates timely submissions and adherence to deadlines.</Typography>
        </TimelineContent>
      </TimelineItem>


      {/* Timeline Item 6 (No connector after the last item) */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: 'white', width:'70px', height:'70px', borderRadius:'2px', display:'flex', alignItems:"center", justifyContent:'center' }}>
            <FavoriteIcon sx={{color:'#FF9100', width:'35px', height:'35px'}}/>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '25px', px: 2, gap:'5px', display:'flex', flexDirection:'column', fontWeight: 'bold' }}>
        <Typography variant="h6" component="span" sx={{fontSize:'17px'}}>
            Rest
          </Typography>
          <Typography sx={{fontSize:'14px'}}>The ability to access live data improves the overall user experience, making the platform more responsive and user-friendly. This encourages frequent use and engagement with the system.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
