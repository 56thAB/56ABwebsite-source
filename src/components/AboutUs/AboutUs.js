import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function AboutUs() {
  return (
    <Box sx={{width:"70%", margin:"auto", marginTop:"2rem"}}>
      <Typography variant="h5" gutterBottom>
        [56AB] 56TH ASSAULT BATTALION
      </Typography>
      <Typography variant="body1" gutterBottom>
        Founded on 16.06.2020
      </Typography>

      <Typography variant="body1" gutterBottom>
        SERVER: ⁠cobalt | EU 🇪🇺
      </Typography>
      <Typography variant="body1" gutterBottom>
        FACTION: TR :tr~2:
      </Typography>
      <Typography variant="body1" gutterBottom>
        SPECIALIZATION: Small infantry squads
      </Typography>

      <Typography variant="body1" gutterBottom>
        🕐 ONLINE AT: We are randomly active at least 2 times a week. (You just get pinged when we play)
      </Typography>
      <Typography variant="body1" gutterBottom>
        ⊳ Open squads at 4:00 PM.
      </Typography>
      <Typography variant="body1" gutterBottom>
        ⊳ Tactical squads at 9:00 PM.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Time above is your local (device) time
      </Typography>

      <Typography variant="body1" gutterBottom>
        DISCORD INVITE:{' '}
        <Link href="https://discord.gg/Rgh2GKwgpG" target="_blank" rel="noopener">
          https://discord.gg/Rgh2GKwgpG
        </Link>{' '}
        (Anyone can join)
      </Typography>

      <Typography variant="body1" gutterBottom>
        📰 Description:
      </Typography>
      <Typography variant="body1" gutterBottom>
        There is only so much we can tell you through this ad. Therefore, how about you join our discord and make your
        own picture?
      </Typography>

      <Typography variant="body1" gutterBottom>
        We consider ourselves to be a small 🤏 newbie-friendly outfit, and our goal is to make the game fun for both new
        and experienced players regardless of gameplay style. We mostly play infantry 🪖 but don't mind aircraft ✈️ and
        ground vehicles 🚗 too (whatever feels the most enjoyable in a certain moment).
      </Typography>

      <Typography variant="body1" gutterBottom>
        ❓ Why join us?
      </Typography>

      <Typography variant="body1" gutterBottom>
        ⫸ Most importantly, we try to provide a friendly environment with no salt 🧂 (maybe a little).
      </Typography>

      <Typography variant="body1" gutterBottom>
        ⫸ We try to hold a wide range of activities:
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Squads</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>⊳ Tactical squads</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>⊳ Casual squads</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>⊳ Open squads</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>⊳ Squads for ⭐ Veterans of the outfit only</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body1" gutterBottom>
        Activities like ground/air vehicles squads/meme ops are held more rarely.
      </Typography>

      <Typography variant="body1" gutterBottom>
        ⫸ We try to provide a good environment for improvement:
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Improvement Opportunities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                ⊳ We have a wide collection of guides 📖 on various topics
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                ⊳ We have a channel where you can submit your gameplay 📼 for analysis
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                ⊳ We have experienced players who can answer your ❔ questions about the game
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body1" gutterBottom>
        📨 Requirements for those who want to join:
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Requirements</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>⊳ Being willing to learn</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>⊳ Playing at least once a month</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                ⊳ No microphone required (however, if you want to attend advanced squads, you will need it)
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body1" gutterBottom>
        📈 Outfit stats:{' '}
        <Link href="https://wt.honu.pw/o/37571953920069834?tag=56AB" target="_blank" rel="noopener">
          https://wt.honu.pw/o/37571953920069834?tag=56AB
        </Link>
      </Typography>
    </Box>
  );
}
