type Applicant = {
  ObjectId: string;
  'First name': string;
  'Last name': string;
  Location: string;
  Voice: string;
  'Non-voice': string;
  'Back Office': string;
  Status: string;
};

export const APPLICANTS: Applicant[] = [
  {
    ObjectId: '9f8ashfbnds809fabs',
    'First name': 'John',
    'Last name': 'Doe',
    Location: 'CDMX',
    Voice: 'Yes',
    'Non-voice': 'Bad',
    'Back Office': 'Better',
    Status: 'Approved',
  },
  {
    ObjectId: '9f8ashff32s809fabs',
    'First name': 'Jane',
    'Last name': 'Smith',
    Location: 'Cebu',
    Voice: 'No',
    'Non-voice': 'Regular',
    'Back Office': 'Near',
    Status: 'Incomplete',
  },
  {
    ObjectId: '9f8ashfbnds8f2f32fabs',
    'First name': 'Michael',
    'Last name': 'Johnson',
    Location: 'Ilo',
    Voice: 'No',
    'Non-voice': 'Bad',
    'Back Office': 'Better',
    Status: 'Disqualified',
  },
  {
    ObjectId: '9f8ashf3fsf3a1s809f',
    'First name': 'Emily',
    'Last name': 'Brown',
    Location: 'CDMX',
    Voice: 'Yes',
    'Non-voice': 'Regular',
    'Back Office': 'Near',
    Status: 'Approved',
  },
  {
    ObjectId: '9f8ashfbnds809fafsa13f32f4',
    'First name': 'David',
    'Last name': 'Davis',
    Location: 'Cebu',
    Voice: 'No',
    'Non-voice': 'Bad',
    'Back Office': 'Better',
    Status: 'Incomplete',
  },
  {
    ObjectId: '9f8ashfbnf342f43as',
    'First name': 'Sarah',
    'Last name': 'Wilson',
    Location: 'Ilo',
    Voice: 'Yes',
    'Non-voice': 'Regular',
    'Back Office': 'Near',
    Status: 'Approved',
  },
  {
    ObjectId: '9f8ashf3wf3waf3ca',
    'First name': 'Robert',
    'Last name': 'Taylor',
    Location: 'CDMX',
    Voice: 'No',
    'Non-voice': 'Regular',
    'Back Office': 'Better',
    Status: 'Incomplete',
  },
  {
    ObjectId: '9f8ashfbnnas-f09nd09sa',
    'First name': 'Jennifer',
    'Last name': 'Anderson',
    Location: 'Cebu',
    Voice: 'Yes',
    'Non-voice': 'Bad',
    'Back Office': 'Better',
    Status: 'Approved',
  },
  {
    ObjectId: '9f8ashfbnds80ncsd0a9nbcd0sa',
    'First name': 'Christopher',
    'Last name': 'Thomas',
    Location: 'Ilo',
    Voice: 'Yes',
    'Non-voice': 'Bad',
    'Back Office': 'Better',
    Status: 'Incomplete',
  },
  {
    ObjectId: '9f8ashfbndmdsa-fjnds09',
    'First name': 'Jessica',
    'Last name': 'Martinez',
    Location: 'CDMX',
    Voice: 'No',
    'Non-voice': 'Regular',
    'Back Office': 'Near',
    Status: 'Disqualified',
  },
];
