import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'samagams.org';
  stickyClass = true;
  condensedZoom = false;

  samagamsList = [
    {
      startDate: '1/13/2023',
      endDate: '1/16/2023',
      city: 'Albuquerque, NM',
      contact: ['Arminder Kaur'],
      phone: ['505-720-5011'],
      airport: ['ABQ'],
      programLink: 'https://www.samagams.org/abq2023.pdf',
      airLink: 'https://docs.google.com/forms/d/e/1FAIpQLScf_dUeVvutiie4kdK1lo_24Y_y7MFKX-gZ6aIUN5ne2XTOng/viewform',
      canada: false,
    },
    {
      startDate: '1/27/2023',
      endDate: '1/29/2023',
      city: 'Mexico City, MX',
      contact: ['Jaswinder Singh','Surjit Singh'],
      phone: ['+52 55 8023 8547', '+52 55 5408 2551'],
      airport: ['MEX'],
      programLink: 'https://www.samagams.org/mx2023v3.pdf',
      airLink: 'https://bit.ly/3AYEvYz',
      canada: false,
    },
    {
      startDate: '2/17/2023',
      endDate: '2/20/2023',
      city: 'Dallas, TX',
      contact: ['Jagdeep Singh'],
      phone: ['214-707-0838'],
      airport: ['DAL, DFW'],
      programLink: 'https://www.samagams.org/dal2023.pdf',
      airLink: 'https://forms.gle/bkoqHe273hAKsQa86',
      canada: false,
    },
    {
      startDate: '3/3/2023',
      endDate: '3/5/2023',
      city: 'San Diego, CA',
      contact: ['Rominder Singh','Narinder Singh'],
      phone: ['858-205-9515', '858-212-1400'],
      airport: ['SAN'],
      programLink: 'https://www.samagams.org/sd2023v1.pdf',
      airLink: 'https://bit.ly/3VN0qdD',
      canada: false,
    },
    {
      startDate: '4/6/2023',
      endDate: '4/9/2023',
      city: 'Montreal, QC',
      contact: ['Rajinderpal Singh','Ravinder Singh'],
      phone: ['514-683-7943', '514-917-8669'],
      airport: ['YUL'],
      programLink: 'https://www.samagams.org/mtl2023apr.pdf',
      airLink: 'https://forms.gle/3DV24rzQmfMenabZ6',
      canada: true,
    },
    {
      startDate: '4/14/2023',
      endDate: '4/16/2023',
      city: 'Bellingham, WA',
      contact: ['Sukhdev Singh','Tejinder Singh'],
      phone: ['778-839-6925', '425-786-4118'],
      airport: ['Canada: YXX, YVR','USA: BLI, SEA, PAE'],
      programLink: 'https://www.samagams.org/bell2023.pdf',
      airLink: 'https://docs.google.com/forms/d/e/1FAIpQLSerwU-p6_ap_3KYBUAHL6pEQz-osGOSo3raUwwaK7eOOWFq5g/viewform?pli=1',
      canada: false,
    },
    {
      startDate: '4/21/2023',
      endDate: '4/23/2023',
      city: 'Connecticut',
      contact: ['Anju Kaur'],
      phone: ['914-806-4693'],
      airport: ['BDL'],
      programLink: 'https://www.samagams.org/ct2023.pdf',
      airLink: 'https://tinyurl.com/dgnctsamagam',
      canada: false,
    },
    {
      startDate: '5/5/2023',
      endDate: '5/7/2023',
      city: 'Carteret, NJ',
      contact: ['Paramjit Singh','Parmpuneet Singh'],
      phone: ['732-543-6688', '610-564-6809'],
      airport: ['EWR'],
      programLink: 'https://www.samagams.org/nj2023.pdf',
      airLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeqPgqx_-DlTVmG7Z67J2fQSxcsraibTO3A3PiXmD5Uy25TJA/viewform',
      canada: false,
    },
    {
      startDate: '5/12/2023',
      endDate: '5/14/2023',
      city: 'Los Angeles, CA',
      contact: ['Davinder Singh','Prabhjot Singh','Lucky Singh'],
      phone: ['562-210-6245', '626-484-4314','818-419-6633'],
      airport: ['SNA, ONT'],
    canada: false,
    },
    {
      startDate: '5/19/2023',
      endDate: '5/22/2023',
      city: 'Winnipeg, MB',
      contact: ['Baldev Singh','Preet Singh'],
      phone: ['204-999-7886', '204-999-2170'],
      airport: ['YWG'],
      canada: true,
    },
    {
      startDate: '5/26/2023',
      endDate: '5/29/2023',
      city: 'Fairfax, VA',
      contact: ['Satinder Kaur','Sukhjeet Kaur'],
      phone: ['703-819-2772', '856-473-8620'],
      airport: ['DCA/IAD'],
      canada: false,
    },
    {
      startDate: '6/16/2023',
      endDate: '6/18/2023',
      city: 'San Francisco, CA',
      contact: ['Nixinder Singh','Ratan Deep Singh'],
      phone: ['707-326-1188', '571-314-6779'],
      airport: ['SFO'],
      programLink: 'https://www.samagams.org/sf2023.pdf',
      airLink: 'https://bit.ly/SFByAir',
      roadLink: 'https://bit.ly/ByRoad',
      canada: false,
    },
    {
      startDate: '6/23/2023',
      endDate: '6/25/2023',
      city: 'Detroit, MI',
      contact: ['Swaran Singh','Naveen Mata'],
      phone: ['419-450-2637', '734-787-3975'],
      airport: ['DTW'],
      programLink: 'https://www.samagams.org/det2023.pdf',
      airLink: 'http://bit.ly/DGN-DTW',
      canada: false,
    },
    {
      startDate: '6/30/2023',
      endDate: '7/4/2023',
      city: 'Edmonton, AB',
      contact: ['Satnam Singh','Manjit Singh'],
      phone: ['780-232-3558', '780-710-7503'],
      airport: ['YEG'],
      canada: true,
    },
    {
      startDate: '7/14/2023',
      endDate: '7/16/2023',
      city: 'Atlanta, GA',
      contact: ['Neena Kaur','Prince Singh'],
      phone: ['678 787 9164', '770 374 5590'],
      airport: ['ATL'],
      canada: false,
    },
    {
      startDate: '8/4/2023',
      endDate: '8/7/2023',
      city: 'Vancouver, BC',
      contact: ['Sukhdev Singh'],
      phone: ['778-839-6925'],
      airport: ['YVR'],
      canada: true,
    },
    {
      startDate: '8/18/2023',
      endDate: '8/20/2023',
      city: 'Rockville, MD',
      contact: ['Arminder Pal  Singh','Amar Trivedi'],
      phone: ['281 865 8678', '702-378-5122'],
      airport: ['BWI, DCA, IAD'],
      canada: false,
    },
    {
      startDate: '9/1/2023',
      endDate: '9/4/2023',
      city: 'Toronto, ON',
      contact: ['Bhupinder Singh','Gurbinder Singh'],
      phone: ['416 817-1239', '905 330-3103'],
      airport: ['YYZ'],
      canada: true,
    },
    {
      startDate: '9/1/2023',
      endDate: '9/4/2023',
      city: 'Seattle, WA',
      contact: ['Tejinder Singh','Amritpal Singh'],
      phone: ['425-786-4118', '425-876-0574'],
      airport: ['SEA'],
      canada: false,
    },
    {
      startDate: '9/15/2023',
      endDate: '9/17/2023',
      city: 'Austin, TX',
      contact: ['Sukhdeep Singh','Gurinderjit Singh'],
      phone: ['512-577-9707', '512-577-6672'],
      airport: ['AUS'],
      canada: false,
    },
    {
      startDate: '10/6/2023',
      endDate: '10/9/2023',
      city: 'Calgary, AB',
      contact: ['Deepinder Kaur','Vijay Singh Parmar'],
      phone: ['512-577-9707', '512-577-6672'],
      airport: ['YYC'],
      canada: true,
    },
    {
      startDate: '10/6/2023',
      endDate: '10/9/2023',
      city: 'Ottawa, ON',
      contact: ['Pervinder Singh'],
      phone: ['613 592 6644'],
      airport: ['YOW'],
      canada: true,
    },
    {
      startDate: '10/13/2023',
      endDate: '10/15/2023',
      city: 'Sacramento, CA',
      contact: ['Deepinder Kaur','Vijay Singh Parmar'],
      phone: ['512-577-9707', '512-577-6672'],
      airport: ['SMF'],
      canada: false,
    },
    {
      startDate: '10/13/2023',
      endDate: '10/15/2023',
      city: 'Cleveland, OH',
      contact: ['Gurcharan Singh'],
      phone: ['216-409-3550'],
      airport: ['CLE'],
      canada: false,
    },
    {
      startDate: '10/27/2023',
      endDate: '10/29/2023',
      city: 'New York, NY',
      contact: ['Gurpreet Singh','Manpreet Singh'],
      phone: ['917-647-8495', '516-993-8650'],
      airport: ['LGA, JFK, ISP'],
      canada: false,
    },
    {
      startDate: '11/3/2023',
      endDate: '11/5/2023',
      city: 'Boston, MA',
      contact: ['Prabhjot Singh','Kanwaljit Singh'],
      phone: ['978 580 9244', '508 572 0769'],
      airport: ['BOS'],
      canada: false,
    },
    {
      startDate: '11/17/2023',
      endDate: '11/19/2023',
      city: 'Montreal, QC',
      contact: ['Rajinderpal Singh','Ravinder Singh'],
      phone: ['514-683-7943', '514-917-8669'],
      airport: ['YUL'],
      canada: true,
    },
    {
      startDate: '11/23/2023',
      endDate: '11/26/2023',
      city: 'Las Vegas, NV',
      contact: ['Rajwinder Singh','Sukreet Singh'],
      phone: ['702-429-7354', '213-271-8914'],
      airport: ['LAS'],
      canada: false,
    },
    {
      startDate: '12/8/2023',
      endDate: '12/10/2023',
      city: 'Raleigh, NC',
      contact: ['Satnam Singh','Davinder Singh'],
      phone: ['919 624 7553', '919 627 5010'],
      airport: ['RDU'],
      canada: false,
    },
  ];

  filteredSamagams = [...this.samagamsList];

  indiaSamagams = [
    {

    }
  ];

  filterList = (filterType) => {
    const samagamsCopy = [...this.samagamsList];
    this.filteredSamagams = samagamsCopy.filter((samagam)=>{
      if(filterType === true || filterType === false){
        return samagam.canada === filterType;
      } else {
        return samagam;
      }

    })

  }
}
