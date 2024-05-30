'use client';

// internal
import React, {useState} from 'react'; 
import Header from '@/app/components/composite/headerRole';
import PermissionsManagement from './permissions';
import { Stack, Box,Typography, FormControlLabel } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomButton from '@/app/components/ui/customButtonV2';
import CustomFormLabel from '@/app/components/ui/customFormlabel';
import CustomTextField from '@/app/components/ui/customTextField';
import CustomCheckbox from '@/app/components/ui/customCheckbox';
import axios from 'axios';

const AddRole = () => {
    const pageTitle = "Add New Role";
    const breadcrumb = ["Dashboard", "Roles & Permissions", "Add Role"];

    const [formData, setFormData] = useState({
      name: '',
      description: ''
    });
  
    const handleChangeValue = (n: { target: { name: any; value: any; }; }) => {
      const { name, value } = n.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

  const CreateRole = async (n: { preventDefault: () => void; }) => {
    n.preventDefault();

    const url = 'https://api-gateway-qa.wateen.io/api/v1/CreateRole';
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3UzBQTjZPaDZZd3ZQM0sycGVQZFJQZnJYSHgxZUltUXdsQlFoUmhDZkpzIn0.eyJleHAiOjE3MTY5MDk5NTgsImlhdCI6MTcxNjkwNjM1OCwianRpIjoiYmY2N2I1NjYtOTAyZC00MTVkLWI5MGYtOTYxOTk4NmUwN2U4IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1xYS53YXRlZW4uaW8vcmVhbG1zL21hc3RlciIsImF1ZCI6WyJXYXRlZW4tSU1TLVFBIiwieHl6LXJlYWxtIiwibWFzdGVyLXJlYWxtIiwiYWJjLXJlYWxtIiwiYWNjb3VudCJdLCJzdWIiOiJhMGUzNzc2MS1jMGI5LTQ4MzgtOTY2ZS00ZmJlMjJhMzE5MWQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJXYXRlZW4tSU1TLVFBIiwic2Vzc2lvbl9zdGF0ZSI6ImNmZWZkNzEwLWFhMjYtNDVjMy1hYjdhLTFhZWRmMDcwMGRjOSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImNyZWF0ZS1yZWFsbSIsImRlZmF1bHQtcm9sZXMtbWFzdGVyIiwib2ZmbGluZV9hY2Nlc3MiLCJ0ZXN0ZXIiLCJhZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsieHl6LXJlYWxtIjp7InJvbGVzIjpbInZpZXctcmVhbG0iLCJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwiY3JlYXRlLWNsaWVudCIsIm1hbmFnZS11c2VycyIsInF1ZXJ5LXJlYWxtcyIsInZpZXctYXV0aG9yaXphdGlvbiIsInF1ZXJ5LWNsaWVudHMiLCJxdWVyeS11c2VycyIsIm1hbmFnZS1ldmVudHMiLCJtYW5hZ2UtcmVhbG0iLCJ2aWV3LWV2ZW50cyIsInZpZXctdXNlcnMiLCJ2aWV3LWNsaWVudHMiLCJtYW5hZ2UtYXV0aG9yaXphdGlvbiIsIm1hbmFnZS1jbGllbnRzIiwicXVlcnktZ3JvdXBzIl19LCJtYXN0ZXItcmVhbG0iOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFiYy1yZWFsbSI6eyJyb2xlcyI6WyJ2aWV3LXJlYWxtIiwidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJtYW5hZ2UtaWRlbnRpdHktcHJvdmlkZXJzIiwiaW1wZXJzb25hdGlvbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiY2ZlZmQ3MTAtYWEyNi00NWMzLWFiN2EtMWFlZGYwNzAwZGM5IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKQSBUYXRlZWgiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZm5hbmFobWFkIiwiZ2l2ZW5fbmFtZSI6IkpBIiwiZmFtaWx5X25hbWUiOiJUYXRlZWgiLCJlbWFpbCI6ImlhZm5hbi5zLmFobWVkQGdtYWlsLmNvbSJ9.M2fITADLJw2TjoE2QgUBv19LjQR3LYpWvqHZr20UuF9n14tIAW-XuMVECcRg6kb0FVcCpUk8__AelUx6vvOz19hsJnoiM1fxlmGoeJm2Ku6tBjpU0522lILOZVYr9WrlUU9zGI4SjOj9-_dgKE_kLredPI_J5jYnyjzRlcyj4-LdqLsZQqrTreFt4HE6bZFk3hk2aQCVZek3w67eC_zv6m88EhcGa3jQ-5E131p7nwr2aTD-fXkhT8OD6sOqPnWTa3S_KmdGMvLGjl4IenHng6J5-A9ChlqCk-oxjZbGs9i1GJ-1JkubkqBKMpAxBM-4qHDa6n4I2mxzN8J5oS7l9A';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    const data = {
      name: formData.name,
      description: formData.description
    };

    try {
      const response = await axios.post(url, data, { headers });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    const COMMON_TAB = [
        { value: '1', label: 'Basic Information', disabled: false },
        { value: '2', label: 'Add Permissions', disabled: false },
      ];

      const [isChecked, setIsChecked] = useState(false);

      const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
      };
    
      
  return (
    <Stack gap={2}>
      <Header pageTitle={pageTitle} breadcrumb={breadcrumb} />
      <Stack bgcolor="white" padding={3} borderRadius={4}>
      <TabContext value={value}>
                <Box>
                  <TabList onChange={handleChange} aria-label="tabs"
                        sx={{
                            '.MuiButtonBase-root': {
                            '&.Mui-selected': {
                                color: '#fff',
                                backgroundColor: '#FF8C29',
                                padding: '18px 20px',
                                borderRadius: '12px',
                              '&.MuiTabs-indicator' : {
                                backgroundColor: '#fff',
                              }
                        },
                        },
                    }}>
                    {COMMON_TAB.map((tab, index) => (
                      <Tab 
                      key={tab.value} label={tab.label} value={String(index + 1)} />
                    ))}
                  </TabList>
                </Box>
                <TabPanel value="1">
                <Stack gap={3}>
                  <Stack flexDirection="row" justifyContent="space-between">
                    <Box>
                    <Typography variant="h6" color="#52006a">
                        Add new Role
                    </Typography>
                    <Typography>To change your  Role detail , edit and save from here</Typography>
                    </Box>
                    <Stack flexDirection="row" gap={1}>
                    <CustomButton
                        bgColor="transparent"
                        color="#52006a"
                        label="Cancel"
                        fullWidth={false}
                        type="button"
                        variant="outlined"
                        width={90}
                        radius={'13px'}
                        height={45}
                    />
                    <CustomButton
                        bgColor="#52006a"
                        color="#ffffff"
                        label="Save"
                        fullWidth={false}
                        type="submit"
                        variant="contained"
                        radius={'13px'}
                        width={120}
                        height={45}
                        onClick={CreateRole}
                    />
                    </Stack>
                </Stack>
                <Stack gap={3} border="1px solid #EEE6F1" padding={3} borderRadius={2.5}>
                <Box bgcolor="#f6f6f6" padding={2} borderRadius={2.5}>
                    <Typography fontWeight={600} variant="h6" color="#52006a">
                    Role Information
                    </Typography>
                </Box>
                <Stack flexWrap="wrap" gap={3} flexDirection={{ sm: 'column', md: 'row', lg: 'row' }}>
                    <Stack width={{ md: '100%', lg: '48%' }}>
                    <CustomFormLabel>Role Name</CustomFormLabel>
                    <CustomTextField
                        fullWidth
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChangeValue}
                        placeholder="Enter Full Role name"
                    />
                    </Stack>
                    <Stack width={{ md: '100%', lg: '48%' }}>
                    <CustomFormLabel>Account status</CustomFormLabel>
                    <FormControlLabel
                        style={{
                          backgroundColor: isChecked ? '#EEE6F1' : '#f6f6f6',
                          color: isChecked ? "#52006A" : 'inherit',
                          padding: '9px 8px',
                          borderRadius: '4px',
                        }}
                        control={
                          <CustomCheckbox
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                        }
                      label="Active"
                    />
                    </Stack>
                </Stack>
                <Stack flexWrap="wrap" gap={2} flexDirection={{ sm: 'column', md: 'row' }}>
                    <Stack width='100%'>
                      <CustomFormLabel>Role Description</CustomFormLabel>
                      <CustomTextField
                        inputProps={{
                          style: {
                            paddingBottom: '5rem',
                          },
                         }}
                        fullWidth
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChangeValue}
                        placeholder="Enter short overview of the Role"
                      />
                  </Stack>
                </Stack>
                </Stack>
                </Stack>
                </TabPanel>
                <TabPanel value="2">
                <Stack gap={3}>
                  <Stack flexDirection="row" justifyContent="space-between">
                    <Box>
                    <Typography variant="h6" color="#52006a">
                        Add new Role
                    </Typography>
                    <Typography>To change your  Role detail , edit and save from here</Typography>
                    </Box>
                    <Stack flexDirection="row" gap={1}>
                    <CustomButton
                        bgColor="transparent"
                        color="#52006a"
                        label="Cancel"
                        fullWidth={false}
                        type="button"
                        variant="outlined"
                        width={90}
                        height={45}
                        radius={'13px'}
                    />
                    <CustomButton
                        bgColor="#52006a"
                        color="#ffffff"
                        label="Save"
                        fullWidth={false}
                        type="submit"
                        variant="contained"
                        width={120}
                        height={45}
                        radius={'13px'}
                        onClick={CreateRole}
                    />
                    </Stack>
                </Stack>
                <Stack gap={3} border="1px solid #EEE6F1" padding={3} borderRadius={2.5}>
                  <Box bgcolor="#f6f6f6" padding={2} borderRadius={2.5}>
                  <Stack gap={3}>
                  <Stack flexDirection="row" justifyContent="space-between">
                    <Box>
                      <Typography fontWeight={600} variant="h6" color="#52006a">
                      Add Permissions
                      </Typography>
                      <Typography fontWeight={400} variant="body2" color="#414141">
                      Allows user to control and manage buyer accounts by assigning them to specific user.
                      </Typography>
                      </Box>
                      <CustomButton
                        bgColor="#52006a"
                        color="#ffffff"
                        label="Save Changes"
                        width={145}
                        fullWidth={false}
                        type="submit"
                        variant="contained"
                    />
                  </Stack>
                  </Stack>
                  </Box>
                <Stack gap={3} padding={3} borderRadius={2.5}>
                  <PermissionsManagement />
                </Stack>
                </Stack>
                </Stack>
              </TabPanel>

            </TabContext>
      </Stack>
    </Stack>
  );
};

export default AddRole;