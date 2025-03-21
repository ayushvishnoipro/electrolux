import { useState } from 'react';
import studentsData from '@/data/student.json';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const StudentsTab = () => {
  const [students, setStudents] = useState(studentsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [filterStream, setFilterStream] = useState('all');

  // Filter students based on search and filters
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.roll_number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === 'all' || student.year_of_study.toString() === filterYear;
    const matchesStream = filterStream === 'all' || student.stream === filterStream;
    return matchesSearch && matchesYear && matchesStream;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Student Management</h2>
        <Button>Add New Student</Button>
      </div>

      <div className="flex gap-4 items-center">
        <Input
          placeholder="Search by name or roll number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        
        <select 
          value={filterYear} 
          onChange={(e) => setFilterYear(e.target.value)}
          className="border rounded p-2"
        >
          <option value="all">All Years</option>
          {[1,2,3,4,5].map(year => (
            <option key={year} value={year}>{`Year ${year}`}</option>
          ))}
        </select>

        <select 
          value={filterStream} 
          onChange={(e) => setFilterStream(e.target.value)}
          className="border rounded p-2"
        >
          <option value="all">All Streams</option>
          <option value="Natural Sciences">Natural Sciences</option>
          <option value="Engineering Sciences">Engineering Sciences</option>
          <option value="Economic Sciences">Economic Sciences</option>
        </select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Roll Number</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Stream</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStudents.map((student) => (
            <TableRow key={student.roll_number}>
              <TableCell>{student.roll_number}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.year_of_study}</TableCell>
              <TableCell>{student.stream}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};