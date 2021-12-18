---
label: Student Volunteers
description: Thank you to the following students for volunteering to support the running of !!conference.short_name!! !!conference.year!!.

menus:
  organisation:
    title: Student Volunteers
    alt: The list of students volunteering to support the running of !!conference.short_name!! !!conference.year!!.
    weight: 0
---

# Student Volunteers

The following students generously supported the organisation and running of {{ site.conference.short_name }} {{ site.conference.year }}:

{% assign num_sv_members = site.data.sv | size %}
{% assign half_num_sv_members = num_sv_members | plus: 1 %}
{% assign half_num_sv_members = half_num_sv_members | divided_by: 2 %}

<div class="row">
	<div class="col-lg-6 col-12">
		<ul class="list-unstyled pls-0 mb-0">
            {% for sv_member in site.data.sv offset:0 limit:half_num_sv_members %}
                <li class="pb-1">{{ sv_member.name }}<br><em class="text-muted small">{{ sv_member.institution }}, {{ sv_member.country }}</em></li>
            {% endfor %}
		</ul>
	</div>

	<div class="col-lg-6 col-12">
		<ul class="list-unstyled pls-0 mb-0">
            {% for sv_member in site.data.sv offset:half_num_sv_members %}
                <li class="pb-1">{{ sv_member.name }}<br><em class="text-muted small">{{ sv_member.institution }}, {{ sv_member.country }}</em></li>
            {% endfor %}
		</ul>
	</div>
</div>
