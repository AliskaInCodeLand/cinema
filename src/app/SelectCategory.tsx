import {
  AutoAwesome,
  Bloodtype,
  Book,
  BugReport,
  ChildCare,
  EmojiEvents,
  FamilyRestroom,
  Favorite,
  LocalMovies,
  Movie,
  ReportProblem,
  Tv,
  Upcoming,
  Whatshot,
} from '@mui/icons-material';

import { Button, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { CATEGORIES } from './constans';
import { Link } from 'react-router-dom';

const iconMap = {
  AutoAwesome: <AutoAwesome />,
  Movie: <Movie />,
  Tv: <Tv />,
  LocalMovies: <LocalMovies />,
  Bloodtype: <Bloodtype />,
  EmojiEvents: <EmojiEvents />,
  Favorite: <Favorite />,
  BugReport: <BugReport />,
  ReportProblem: <ReportProblem />,
  ChildCare: <ChildCare />,
  Whatshot: <Whatshot />,
  Upcoming: <Upcoming />,
  FamilyRestroom: <FamilyRestroom />,
  ComicBook: <Book />,
} as const;

function SelectCategory() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: '#ffffff96',
          backgroundColor: '#e5000085',
          '&:hover': {
            bgcolor: '#E50000',
            color: '#FFFFFF',
          },
        }}
      >
        Category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        {CATEGORIES.map(category => (
          <MenuItem onClick={handleClose} key={category.value} component={Link} to={category.url}>
            <ListItemIcon>{iconMap[category.icon as keyof typeof iconMap] || null}</ListItemIcon>
            <ListItemText>{category.title}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default SelectCategory;
