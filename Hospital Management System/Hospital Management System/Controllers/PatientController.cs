using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PatientController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/patients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatients()
        {
            return await _context.Patients.ToListAsync();
        }

        // GET: api/patients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatient(int id)
        {
            var patient = await _context.Patients.FindAsync(id);

            if (patient == null)
            {
                return NotFound();
            }

            return patient;
        }

        // POST: api/patients
        [HttpPost]
        public async Task<ActionResult<Patient>> CreatePatient([FromBody] Patient newPatient)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            newPatient.CreatedOn = DateTime.Now;
            newPatient.IsActive = true;

            _context.Patients.Add(newPatient);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPatient), new { id = newPatient.PatientId }, newPatient);
        }

        // PUT: api/patients/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePatient(int id, [FromBody] Patient updatedPatient)
        {
            if (id != updatedPatient.PatientId)
            {
                return BadRequest();
            }

            _context.Entry(updatedPatient).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/patients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatient(int id)
        {
            var patient = await _context.Patients.FindAsync(id);
            if (patient == null)
            {
                return NotFound();
            }

            _context.Patients.Remove(patient);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }

}
