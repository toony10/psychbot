import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Tooltip } from '@mui/material';

const drawerWidth = 280;



const doctors = [
  {
    name: 'Huda Radwan',
    jobTitle: 'psychologist',
    img: '/images/doctors/doctor1.JPG',
    Specializations: [
      'depression',
      'Anxiety and obsessiveness',
      'Marriage counseling/relationship problems',
      'schizotypal disorders',
    ],
    experiences: [
      {
        Position: 'Protection project manager',
        place: 'Terre des Hommes (TDH)',
        date: 'August 2020 - now',
      },
      {
        Position: 'Gender Project Manager',
        place: 'Egyptian Women Union',
        date: 'August 2019 - June 2020',
      },
      {
        Position: 'Health Program Manager',
        place: 'Save the Children International',
        date: 'June 2017 - January 2018',
      },
      {
        Position: 'Humanitarian Coordinator',
        place: 'United Nations Population Fund',
        date: 'September 2015 - April 2016',
      },
      {
        Position: 'Medical Referral Coordinator',
        place: 'United Nations High Commissioner for Refugees',
        date: 'March 2014 - September 2015',
      },
      {
        Position: 'Director of the Human Trafficking Victims Support Unit',
        place: 'International Organization for Migration (IOM)',
        date: 'August 2020 - now',
      },
    ],
  },
  {
    name: 'Basma Mahmoud',
    jobTitle: 'psychologist',
    img: '/images/doctors/doctor2.JPG',
    Specializations: [
      'depression',
      'Adolescence problems',
      'Anxiety and obsessiveness',
      'addiction',
      'Marriage counseling/relationship problems',
      'schizotypal disorders',
    ],
    experiences: [
      {
        Position: 'Training and treatment',
        place:
          'Heliopolis Hospital for Mental Health and Addiction Treatment (Airport Hospital) - Addiction Unit',
        date: 'Sept 2019 - Feb 2021',
      },
      {
        Position: 'Training and treatment',
        place:
          'Helwan Hospital for Mental Health and Addiction Treatment - Child and Adolescent Unit',
        date: 'Feb 2019 - Aug 2019',
      },
      {
        Position: 'Training and treatment',
        place:
          'Helwan Hospital for Mental Health and Addiction Treatment - Child and Adolescent Unit',
        date: 'Oct 2015 - Apr 2016',
      },
    ],
  },
  {
    name: 'Hussein Hajj Ahmed',
    jobTitle: 'psychologist',
    img: '/images/doctors/doctor3.JPG',
    Specializations: [
      'addiction',
      'Adolescence problems',
      'Marriage counseling/relationship problems',
      'Anxiety and obsessiveness',
      'depression',
      'schizotypal disorders',
    ],
    experiences: [
      {
        Position: 'Clinical psychologist',
        place: 'Theresdium',
        date: 'Jul 2017 - May 2019',
      },
      {
        Position: 'Clinical training',
        place: 'General Secretariat of Mental Health',
        date: 'March 2017 - September 2018',
      },
      {
        Position: 'Clinical training',
        place: 'General Secretariat of Mental Health',
        date: 'Aug 2016 - Feb 2017',
      },
      ,
      {
        Position: 'Training',
        place: 'Abbasiya Mental Health Hospital',
        date: 'Sept 2015 - Mar 2016',
      },
      ,
      {
        Position: 'Clinical training',
        place: 'General Secretariat of Mental Health',
        date: 'Sept 2015 - Mar 2016',
      },
    ],
  },
  {
    name: 'Marina Makar',
    jobTitle: 'psychologist',
    img: '/images/doctors/doctor4.JPG',
    Specializations: [
      'addiction',
      'Eating disorders',
      'Marriage counseling/relationship problems',
      'Anxiety and obsessiveness',
      'depression',
      'schizotypal disorders',
    ],
    experiences: [
      {
        Position:
          'Clinical training under the supervision of Al-Mamoura Hospital for Mental Health',
        place: 'Mamoura Hospital in Alexandria',
        date: 'Jan 2020 - now',
      },
    ],
  },
  {
    name: 'Ahmed Hashish',
    jobTitle: 'psychologist',
    img: '/images/doctors/doctor5.JPG',
    Specializations: [
      'addiction',
      'Anxiety and obsessiveness',
      'Adolescence problems',
      'depression',
      'schizotypal disorders',
      'Marriage counseling/relationship problems',
    ],
    experiences: [
      {
        Position: 'Planning Therapy Diploma',
        place: 'Swiss Oriental Institute',
        date: 'May 2021 - Mar 2022',
      },
      {
        Position: 'Narrative Exposure Therapy Training Course',
        place: 'Doctors without borders',
        date: 'Dec 2020 - Jan 2021',
      },
      {
        Position:
          'Completion of testing for the main psychological diagnostic categories and mental health',
        place: 'Doctors without borders',
        date: 'Dec 2019 - Feb 2020',
      },
      ,
      {
        Position: 'Preparatory Master of Arts Department of Psychology',
        place: 'Mansoura University',
        date: 'Jan 2015 - Jan 2016',
      },
      ,
      {
        Position:
          'Graduate Diploma in Applied Psychology from the Department of Psychology',
        place: 'al-manoufia University',
        date: 'Jun 2013',
      },
    ],
  },
  {
    name: 'Zakaria Fakhoury',
    jobTitle: 'psychologist',
    img: '/images/doctors/doctor6.JPG',
    Specializations: [
      'Marriage counseling/relationship problems',
      'addiction',
      'Anxiety and obsessiveness',
      'Adolescence problems',
      'depression',
      'aging problems',
    ],
    experiences: [
      {
        Position: 'NM200814# is an active member',
        place: 'International Association of Therapists',
        date: 'Aug 2020 - now',
      },
      {
        Position: 'active member',
        place: 'International Association of Counselors Psychologists',
        date: 'Nov 2018 - now',
      },
      {
        Position: '0293 -6067# is an active member',
        place: 'APA - American Psychotherapist Association',
        date: 'Oct 2016 - now',
      },
      {
        Position:
          'Psychotherapist and Family Relationship Counselor - License # 001702y',
        place: 'CRPO - Canadian College of Psychotherapists',
        date: 'apr 2015 - Now',
      },
      {
        Position: 'active member',
        place: 'Egyptian Society for Cognitive Behavioral Therapy',
        date: 'Feb 2016 - Now',
      },
      {
        Position:
          'Founding member, psychotherapist and family relations consultant',
        place: 'Al-Fukhari Center for Family Counseling and Human Development',
        date: 'Mar 2009 - Now',
      },
    ],
  },
]


function ResponsiveDrawer(props)
{
    // States
  const [doc, setDoc] = useState(doctors[0]);

   function handelDocs(docIndex)
 {
     setDoc(doctors[docIndex])
  }



  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    

    <div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Doctor Details
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >

          <h1 className="text-center m-4 text-3xl font-mono font-semibold text-slate-700">Doctors</h1>
          <hr className='w-32 mx-auto' />
                    { doctors.map((doctor,index) => (
            <div className="flex items-center space-x-4 mt-4 mx-1 shadow-md p-3 rounded-md cursor-pointer"  onClick={() => handelDocs(index)}>
        <Image className="w-[4.5rem] h-[4.5rem] rounded-full" src={doctor.img} alt="doctor" sizes='100vw'  width={100} height={100}/>
    <div className="font-medium dark:text-white">
        <div>{doctor.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{doctor.jobTitle}</div>
    </div>
          </div>
          ))}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <h1 className="text-center m-4 text-3xl font-mono font-semibold text-slate-700">Doctors</h1>
          <hr className='w-32 mx-auto'/>
          { doctors.map((doctor,index) => (
            <div className="flex items-center space-x-4 mt-4 mx-1 shadow-md p-3 rounded-md cursor-pointer"  onClick={() => handelDocs(index)}>
        <Image className="w-[4.5rem] h-[4.5rem] rounded-full" src={doctor.img} alt="doctor" sizes='100vw'  width={100} height={100}/>
    <div className="font-medium dark:text-white">
        <div>{doctor.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{doctor.jobTitle}</div>
    </div>
          </div>
          ))}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className='flex flex-col lg:flex-row'>
          <div className='w-[40%] m-auto lg:m-0'>
          <Image src={doc.img} width={ 500 } height={ 500 } className='rounded-lg	' />
            <h1 className='text-center text-3xl font-semibold text-blue-700 mt-5 '>dr. {doc.name}</h1>
          </div>
          <div className='ml-12 '>
          <div className='mb-10'>
            <h1 className='text-2xl text-gray-600'>Specialization</h1>
              <div className='m-4 flex flex-wrap'>
                { doc.Specializations.map((specialization) => (
                  <span className='bg-slate-200 p-2 rounded-3xl text-base font-bold text-slate-700 mr-4 mb-4'>{specialization}</span>
                ))}
              </div>
            </div>
            <div>
              <h1 className='text-2xl text-gray-600'>experiences</h1>
              { doc.experiences.map((experience) => (
                   <div className='m-4 '>
                <div className='border-l-4 rounded-lg p-1 border-sky-600 shadow-md mb-4'>
                    <h1 className='text-xl font-semibold text-stone-700'>{ experience.Position}</h1>
                  <p className='text-sm font-semibold text-gray-500'>{ experience.place}</p>
                  <p className='text-sm font-semibold text-blue-500'>{ experience.date}</p>
                </div>
              </div>
              ))}
           
            </div>
            
            </div>
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
