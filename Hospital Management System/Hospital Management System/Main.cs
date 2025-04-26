namespace Hospital_Management_System
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Role
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RoleId { get; set; }

        [Required]
        [MaxLength(255)]
        public string RoleName { get; set; }

        public bool IsActive { get; set; } = false;

        public DateTime CreatedOn { get; set; } = DateTime.Now;

        [MaxLength(255)]
        public string CreatedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        [MaxLength(255)]
        public string ModifiedBy { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }

    [Table("tbl_users")]
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required]
        [MaxLength(255)]
        public string Username { get; set; }

        [Required]
        [MaxLength(255)]
        public string Password { get; set; }

        [MaxLength(20)]
        public string MobileNumber { get; set; }

        [MaxLength(255)]
        public string Email { get; set; }

        public int? RoleId { get; set; }

        [ForeignKey("RoleId")]
        public virtual Role Role { get; set; }

        public bool IsActive { get; set; } = false;

        public DateTime CreatedOn { get; set; } = DateTime.Now;

        [MaxLength(255)]
        public string CreatedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        [MaxLength(255)]
        public string ModifiedBy { get; set; }
    }

    [Table("tbl_Patient")]
    public class Patient
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PatientId { get; set; }

        [Required]
        [MaxLength(255)]
        public string PatientNamea { get; set; }  // Note: Typo in column name preserved

        [Required]
        public DateTime DateOfBirth { get; set; }

        [MaxLength(10)]
        public string Gender { get; set; }

        [MaxLength(100)]
        public string City { get; set; }

        [MaxLength(20)]
        public string MobileNumber { get; set; }

        [MaxLength(255)]
        public string Email { get; set; }

        public string Address { get; set; }

        public bool IsActive { get; set; } = false;

        public DateTime CreatedOn { get; set; } = DateTime.Now;

        [MaxLength(255)]
        public string CreatedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        [MaxLength(255)]
        public string ModifiedBy { get; set; }
    }

    public class LoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

}
