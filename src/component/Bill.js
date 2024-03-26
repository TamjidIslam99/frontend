import React from 'react'
import { Table } from 'react-bootstrap'
import '../css/Bill.css'
function Bill () {
  return (
<div class="bill_info" >


    <Table responsive hover striped >
        <tbody>
        <tr>
          <td><strong>Course Teacher / External</strong></td>
          <td><strong>:</strong></td>
          <td>
            <input type="radio" id="position1" name="position" value="Course Teacher"/>
            <label for="position1"> Course Teacher </label>
            <input type="radio" id="position2" name="position" value="External"/>
            <label for="position2"> External</label>
          </td>
        </tr>
        <tr>
            <td><strong>Question Formulation</strong> </td>
            <td><strong>:</strong></td>
            <td>
                <input type="radio" id="creation1" name="creation" value="Yes"/>
                <label for="creation1"> Yes </label>
                <input type="radio" id="creation2" name="creation" value="No"/>
                <label for="creation2"> No</label>
            </td>
        </tr>
        <tr>
            <td><strong>Question Moderation</strong></td>
            <td><strong>:</strong></td>
            <td>
                <input type="radio" id="moderation1" name="moderation" value="Yes"/>
                <label for="moderation1"> Yes </label>
                <input type="radio" id="moderation2" name="moderation" value="No"/>
                <label for="moderation2"> No</label>
            </td>
        </tr>
        <tr>
            <td><strong>Question Translation</strong> </td>
            <td><strong>:</strong></td>
            <td>
                <input type="radio" id="translation1" name="translation" value="Yes"/>
                <label for="translation1"> Yes </label>
                <input type="radio" id="translation2" name="translation" value="No"/>
                <label for="translation2"> No</label>
            </td>
        </tr>
        <tr>
            <td><strong>Project Evaluation</strong></td>
            <td><strong>:</strong></td>
            <td>
                <input type="radio" id="pevaluation1" name="pevaluation" value="Yes"/>
                <label for="pevaluation1"> Yes </label>
                <input type="radio" id="pevaluation2" name="pevaluation" value="No"/>
                <label for="pevaluation2"> No</label><br></br>
            </td>
        </tr>
        <tr>
            <td><strong>Lab Exam Evaluation</strong></td>
            <td><strong>:</strong></td>
            <td>
                <input type="radio" id="levaluation1" name="levaluation" value="Yes"/>
                <label for="levaluation1"> Yes </label>
                <input type="radio" id="levaluation2" name="levaluation" value="No"/>
                <label for="levaluation2"> No</label>
            </td>
        </tr>
        <tr>
            <td><strong>Viva Voce Evaluation</strong></td>
            <td><strong>:</strong></td>
            <td>
                <input type="radio" id="vevaluation1" name="vevaluation" value="Yes"/>
                <label for="vevaluation1"> Yes </label>
                <input type="radio" id="vevaluation2" name="vevaluation" value="No"/>
                <label for="vevaluation2"> No</label>
            </td>
        </tr>
        <tr>
            <td><strong><label for="numberInput1">Number of Tutorial</label></strong></td>
            <td><strong>:</strong></td>
            <td>   
                <input type="number" id="numberInput1" name="numberInput1" min="0" max="10" step="1"/>
            </td>
        </tr>
        <tr>
            <td><strong><label for="numberInput2">Total Tutorial Answerscripts Evaluation</label></strong></td>
            <td><strong>:</strong></td>
            <td>   
                <input type="number" id="numberInput2" name="numberInput2" min="0" max="100" step="1"/>
            </td>
        </tr>
        <tr>
            <td><strong><label for="numberInput3">Total Semester Final Exam Answerscripts Evaluation</label></strong></td>
            <td><strong>:</strong></td>
            <td>   
                <input type="number" id="numberInput3" name="numberInput3" min="0" max="100" step="1"/>
            </td>
        </tr>
        <tr>
            <td><strong>Thesis Evaluation</strong></td>
            <td><strong>:</strong></td>
            <td>
                <input type="radio" id="tevaluation1" name="tevaluation" value="Yes"/>
                <label for="tevaluation1"> Yes </label>
                <input type="radio" id="tevaluation2" name="tevaluation" value="No"/>
                <label for="tevaluation2"> No</label>
            </td>
        </tr>
        <tr>
            <td><strong><label for="numberInput4">Total Thesis Evaluation</label></strong></td>
            <td><strong>:</strong></td>
            <td>   
                <input type="number" id="numberInput4" name="numberInput4" min="0" max="100" step="1"/>
            </td>
        </tr>
        <tr>
            <td><strong>Exam Committee Chairman</strong></td>
            <td><strong>:</strong></td>
            <td>
                <input type="radio" id="exam1" name="exam" value="Yes"/>
                <label for="exam1"> Yes </label>
                <input type="radio" id="exam2" name="exam" value="No"/>
                <label for="exam2"> No</label>
            </td>
        </tr>
        <tr>
            <td><strong>Supervisor</strong></td>
            <td><strong>:</strong></td>
            <td>
                <input type="radio" id="supervisor1" name="supervisor" value="Yes"/>
                <label for="supervisor1"> Yes </label>
                <input type="radio" id="supervisor2" name="supervisor" value="No"/>
                <label for="supervisor2"> No</label>
            </td>
        </tr>
        </tbody>
    </Table>
  
    
    
    

</div>
  )
}

export default Bill
